---
author: "Marlinski"
title: "Principe de fonctionnement d'un Atomic Cross-Chain Swap"
date: 2022-05-03
tags: ["blog", "tech"]
description: "Explication sur le principe de fonctionnement d'un ACCS, un Atomic Cross-Chain Swap"
thumbnail: https://picsum.photos/id/1004/992/620
images: ["https://picsum.photos/id/1004/1200/630"]
---

A l'occasion de mon test personnel de [Atomex](https://atomex.me/), voici quelques explications sur le principe de fonctionnement d'un ACCS, un Atomic Cross-Chain Swap.

<!--more-->

## ACCS : Atomic Cross-Chain Swap
Le principe d'un atomic cross chain swap est de pouvoir procéder `A` un _exchange cross chain_ (genre de l'eth contre du btc) sans passer par un tiers de confiance et sans possibilité que ceux-ci soient perdu.

Pour comprendre prenons d'abord la situation d'un _**non-atomic** cross chain swap_:
- user `A` possède un wallet sur Ethereum `ethA` et sur bitcoin `btcA`
- user `B` possède un wallet sur Ethereum` ethB` et sur bitcoin `btcB`

Le principe d'un swap c'est que par exemple `A` va échanger 1 BTC avec `B` en échange de 13 ethereum.
Une procédure non-atomic serait celle ci:
1. user `A` envoie 1 btc à `B`:       `btcA ----(1 btc)----> btcB`
1. user `B` envoie 13 eth à `A`:    `ethB ----(13 eth)---> ethA`

Le problème c'est que si l'utilisateur `B` est malhonnête, une fois reçu le bitcoin à l'étape 1 il peut décider de ne pas continuer l'étape 2 et de ne pas envoyer les eth.
`A` ne peut rien faire car une fois les btc envoyés, c'est foutu!

La solution c'est de conditionner les transactions en les lockant avec un secret et cela est possible avec un script btc _hashed timelock contract_ (HTLC). 
Un atomic cross chain swap fonctionne donc de la facon suivante:

1. user `A` choisit un secret `S` qu'il hash tel que `H = hash(S)`
1. user `A` envoie 1 btc à `B` qu'il conditionne avec un HTLC :  
   1. `btcA ----(1 btc;  HTLC(H)) ---> btcB`
   2. le principe c'est que `B` ne pourra "redeem" (c'est-à-dire utiliser) ce bitcoin que si il soumet le secret `S` telque que `hash(S) = H`
  Bien sûr à cette etape, `B` ne connait pas ce secret `S` mais uniquement son hash `H`
1. user `B` envoie 13 eth sur un smart contract (escrow)  qui fonctionne comme un HTLC c'est `A` dire que les eth ne peuvent etre redeem par `A` que si il soumet le secret `S`
   1. `ethB ---(13 eth, H) ---> escrow smart contract`
1. user `A` redeem ses eth et pour ce faire doit dévoiler le secret `S`
   1. `ethA ---(redeem, S) ---> escrow smart contract`
   1. `escrow smart contract --- (13 eth) ---> ethA`
1. Le secret `S` est maintenant dévoilé et public sur la chaîne ethereum,  `B` peut alors utiliser ce `S` pour "débloquer" sa transaction et redeem son bitcoin

Le principe fonctionne pour n'importe quel chaîne pour laquelle il est possible d'implementer cette fonction de HTLC !
