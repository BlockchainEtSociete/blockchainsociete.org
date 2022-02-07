---
title: "À quoi ressemblerait notre informatique en cas de guerre ouverte ?"
author: "Nigui"
date: 2022-01-11
draft: true
transcription: true
tags: ["transcription", "blog", "post", "examples"]
thumbnail: https://picsum.photos/id/29/500/350
images: ["https://picsum.photos/id/29/500/350"]
---

Luc : Décryptualité. Semaine 1 de l’année 2022. Salut Manu.

Manu : Salut Luc. Bonne année.

Luc : Oui. Bonne année. C’est ça.
Sommaire de la semaine. Petit sommaire, c’est la rentrée.
La Tribune, « Coup d’arrêt pour le Health Data Hub, la plateforme controversée qui centralise les données de santé des Français », un article de Sylvain Rolland.

Manu : C’est toujours rigolo de parler de ce truc-là, parce que c’est vraiment la France qui a une idée intéressante, centraliser les données de santé, pourquoi pas, mettre ça sur de la grosse informatique et essayer de faire tourner des applications à droite, à gauche, des algorithmes intelligents, et essayer d’en retirer des données pour mieux travailler. Sauf qu’on pense, il semblerait dans les hautes sphères qu’il n’y a que les infrastructures américaines qui peuvent répondre au besoin de volume, parce que c’est très gros.

Luc : C’est le gros sujet depuis la rentrée de septembre, on ne parle que de ça.

Manu : Et ça pue parce qu’on a by-passé les structures européennes et françaises. Les Européens et Français, qui font beaucoup de logiciel libre, ne sont pas contents de cela et il semblerait que finalement, la décision est tombée : non, on ne fera pas vraiment cela tel que c’était demandé. Les autorisations n’ont pas été accordées, donc le gouvernement retire sa demande d’utilisation de la plateforme.

Luc : N’ont-ils pas retiré avant qu’on leur dise non ?

Manu : Peut-être qu’on leur a dit non en douce, et ils ont fait « bon, d’accord ce n’est pas toi qui ne veux pas, c’est moi. »

Luc : Ils se sont dit que ça ne passerait pas.

Manu : Et surtout que ça éviterait d’avoir un sujet un peu tout pourri pendant une année d’élections. On n’a pas besoin de ça. Les données de santé c’est un petit peu fort et important comme chose, on n’a pas envie que ça fuite ou qu’il y ait même la moindre idée d’un risque de ce côté-là.

Luc : Surtout que, par les temps qui courent, la question de la santé est vraiment sensible.

Manu : N’est-ce pas !

Luc : Next INpact, « GnuPG a (enfin) un modèle économique durable (et rentable) », un article de la rédaction.

Manu : C’est un petit truc, c‘est une brève mais c’est toujours sympa. GnuPG [1] est une solution de chiffrement qui permet vraiment de garantir que ce qu’on chiffre avec ou ce qu’on déchiffre avec va être très sécurisé, mais c’est une application libre qui existe depuis des années et qui n’avait pas vraiment de financements solides, ça dépendait beaucoup de dons. Il semblerait que des contrats sont tombés, peut-être à la suite des différentes failles qu’on a pu voir passer, Log4j [2], il n’y a pas longtemps. Il y a des entreprises, il y a des institutions, je n’ai pas les détails, qui ont mis de l’argent sur la table. Donc ils ont tout simplement désactivé tous les dons récurrents qui étaient en place en disant « vous n’avez plus besoin de les rediriger vers nous, vous pouvez les donner à d’autres projets libres, tant mieux pour eux, ce sera très bien parce que nous avons ce qu’il faut. »

Luc : ZDNet France, « Messagerie instantanée : Olvid passe en open source », un article de Louis Adam.

Manu : Je ne sais pas trop ce que c’est que cette application. On a pas mal de messageries, on en utilise beaucoup. Olvid [3] est une application qui devient libre, publiée sur GitHub, pourquoi pas. L’article parle un petit peu des bonnes raisons de faire cela, de passer une application anciennement privatrice ou propriétaire, ça dépend de la terminologie qu’on préfère, en Libre avec la bonne licence qui va bien. En plus il y a des certifications de l’ANSSI [Agence nationale de la sécurité des systèmes d’information] qui permettent de garantir un peu que les bonnes pratiques de sécurité sont appliquées. Bonne nouvelle. Bienvenue dans la grande communauté du Libre. On espère qu’on reparlera d’Olvid dans le futur.

Luc : Sujet de la semaine ? Qu’est-ce que ce sera ? On n’avait que trois articles dans la revue de presse ?

Manu : Je te propose de partir sur un sujet hyper-joyeux, hyper d’actualité, pour sortir de la crise du Covid !

Luc : Pour bien commencer 2022, on va se faire une petite dose d’angoisse et parler en grande partie de la Russie, surtout des menaces de guerre et à quoi pourraient ressembler Internet et l’informatique en cas de guerre ouverte.

Manu : Le premier point dont on avait déjà parlé, on avait déjà abordé le sujet c’est qu’effectivement ça fait déjà quelques années que la Russie essaye de garantir que son Internet puisse être déconnecté de l’Internet du reste du monde et ils auraient fait des tests, il me semble que c’est en 2021, en disant « oui, ça y est, c’est bon, on peut fonctionner sans vous, reste du monde, notamment sans les États-Unis et l’Europe. »

Luc : Ils en ont parlé. On sait que la Chine également a bien verrouillé son Internet avec un contrôle qui permet de s’assurer que les éléments venus de l’extérieur de la Chine sur Internet soient bien filtrés. Tous les GAFAM qui arrivent là-bas ont cédé devant le pouvoir et fait ce que le pouvoir chinois demandait. Ils défendent la liberté d’expression dans certains endroits en refusant les lois locales, mais dans d’autres, ils savent tout à fait plier. Je pense que c’est plus le bénéfice que les grands principes qui les animent.

Manu : Il me semble que les GAFAM ont aussi accepté, en Russie, d’héberger les données russes, les applications russes, sur place et de ne pas les exporter aux États-Unis. Ce n’est pas une garantie de grand-chose d’un point de vue de sécurité de l’information, en tout cas ça permet de bloquer à un moment donné, d’accéder, de lancer des directives locales.

Luc : Dans le registre des trucs contrôlés sur Internet en Russie, il y a le réseau Tor [4], réseau qui permet l’anonymisation, qui a été bloqué en Russie également et c’est tout récent, c’est arrivé il y a peu de temps.
On pourrait dire que ce sont des mesures défensives. Ce qui nous a amenés à parler de ce sujet c’est un article [5] qui a été publié sur desk-russie.eu dans lequel on trouve des spécialistes de la Russie, notamment un article écrit par Françoise Thom qui est une universitaire, spécialiste de la Russie contemporaine et soviétologue. Parmi les autres auteurs de ce site, il y a pas mal d’universitaires, des journalistes, etc., ça n’a pas l’air d’être le premier site complotiste venu. Elle cite un évènement qui est arrivé en décembre, le 17 décembre. Le ministère des Affaires étrangères russe a dévoilé deux projets de texte, des projets de traités à signer entre la fédération de Russie et les États-Unis, donc l’OTAN, deux accords qui sont totalement complémentaires et qui sont présentés allant l’un avec l’autre. Elle dit que ce sont, en fait, des actes de capitulation où la Russie dicte ses exigences envers l’OTAN en lui demandant de faire tout ce qu’elle demande. Le texte est hyper-angoissant. Selon elle, la Russie et Poutine est dans une démarche de va-t-en-guerre, c’est-à-dire que si on lui dit non, il dit on nous agresse donc on va se défendre. Si on cède il dit ce sont des faibles, donc on va les écraser. Je vous invite à lire l’article. Une des choses en lien avec l’informatique qu’on a vue là-dedans, c‘est que dans les menaces qui sont faites, si l’OTAN ne cède pas, il y a, en gros, l’engagement de conflits avec des moyens militaires et techniques. Ce « et techniques » était finalement assez évocateur et on imagine qu’il y a tout ce qui touche l’informatique, les réseaux, en allant jusque dans l’espace. C’est cette question de qu’est-ce qui se passerait si on avait un conflit qui démarrait et on parle d’un conflit ouvert ?

Manu : J’ai une première proposition sur les choses qu’ils sont déjà en train de faire, c’est un peu ridicule, ce sont les usines à trolls. Ça fait des années que les Russes ont des usines à trolls, des fermes à trolls, où plein de gens travaillent en sous-main pour essayer déstabiliser en se basant sur des forums, en lançant des fausses rumeurs, en lançant des théories du complot et tout simplement en abrutissant un peu le discours intelligent. Ça passe par ces fameux trolls mais ça passe aussi des relais. Il semblerait qu’il y ait pas mal de relais dans les médias et dans l’informatique. Je suis un petit peu différents podcasts d’analystes qui essaient de défendre les points de vue russes. Là, par exemple, les deux traités qui ont été proposés en décembre, d’après ces analystes, ce ne sont pas des traités qui demandent la capitulation. Non ! Au contraire, ils demandent un rééquilibrage. L’OTAN aurait validé qu’il n’y aurait pas d’augmentation de son périmètre géographique après la chute du mur. Or, on a bien vu, il y a eu une grosse augmentation des membres de l’OTAN et, pour la Russie, c’est une agression.

Luc : Pour moi les fermes à trolls sont une arme de temps de paix où, en tout cas, on n’est pas dans un conflit déclaré, ouvert. Après, en temps de guerre, il y aura évidemment toujours de la désinformation, donc ça aurait sans doute également un rôle à jouer. On est bien dans quelque chose qui est utilisé, on a eu plein de preuves, on ne sait pas à quel point ça marche, mais on est dans cette idée de que se passerait-il si on arrivait vraiment dans un conflit ouvert ? On a pu avoir un petit avant goût l’année dernière ou il y a deux ans, je ne sais plus, avec un petit coup de soleil.

Manu : Oui, c’était SolarWinds [6], exactement, ça s’appelle une attaque par les fournisseurs. En gros, il s’agit d’une entreprise assez conséquente, qui travaille avec beaucoup d’administrations américaines, notamment des administrations de la Défense, qui fournit notamment des briques logicielles. Les Russes ont réussi, de manière un petit peu compliquée, en récupérant des mots de passe, à pénétrer leurs infrastructures, leurs logiciels et à permettre, par ce biais-là, d’installer dans les différentes administrations américaines des briques qu’ils contrôlaient. Cela leur a permis de rentrer un petit partout et de fouiller. On ne connaît pas exactement la mainmise qu’ils ont eue sur tous les systèmes, notamment on ne sait pas ce qu’ils ont eu comme informations, ce qu’ils ont pu en exporter. Ça a fait une grosse tâche, les États-Unis n’étaient pas contents, mais en même temps c’est compliqué de pointer du doigt parce que, à chaque fois, tout ça c’est sous les auspices de l’anonymat et on cache, au maximum, d’où viennent les origines, on est obligé de creuser, de remonter la chaîne ; c’est très compliqué.

Luc : Si on est dans un contexte de conflit ouvert on n’a pas besoin de se cacher et on peut utiliser toutes les vulnérabilités, tous les trucs qu’on aurait réussi à installer discrètement avant, ou les vulnérabilités connues, pour vraiment faire tomber un maximum de services. On l’a vu avec SolarWinds dans les administrations américaines, il y a pas mal d’administrations américaines qui sont tombées. On le voit avec toutes les opérations qui sont destinées à piquer de l’argent à des organisations en cryptant leurs disques pour empêcher tout ça de tourner. Aujourd’hui, avec les réseaux et l’informatique, on a énormément de choses qui tournent là-dessus. À quoi ressemblera notre vie si nos réseaux téléphoniques tombent ? Si nos réseaux financiers pour payer se cassent la gueule, que les cartes bancaires ne marchent plus ? Si tous les services publics, qui sont largement informatisés, n’arrivent plus à fonctionner, parce que ouvrir un incident, on ne peut plus communiquer ? On peut penser – ça n’était absolument pas un sabotage, ils ont fait ça tout seuls comme des grands – à la façon dont Facebook a réussi à se planter entièrement tout seul avec une seule maladresse et où tout était lié à ce truc qui a planté. On a vu comment ça a complètement bloqué toute leur activité, une activité purement informatique. Imaginons aujourd’hui, dans notre travail, de ne plus avoir nos outils informatiques : si tout s’arrête qu’est-on capable de faire ? Et tout ça dans un contexte où il y aurait, potentiellement en même temps, des manœuvres militaires à l’étranger ou des gens qui font des exactions à l’intérieur du pays, des choses comme ça ; ça devient très compliqué.

Manu : Ils ont fait des tests, clairement. Il y a quelques années, tout le système bancaire de je ne sais plus lequel des pays Baltes avait été cassé, ils ne pouvaient plus rien faire, ça a duré quelques jours il me semble. De la même manière, en Ukraine, des fournisseurs d’électricité ont été désactivés informatiquement, à distance. On peut considérer, imaginer que c’étaient des tests ou autre, on n’a pas les finalités exactes.
Je sais qu’aux États-Unis ils ont eu récemment des problèmes sur leur système énergétique, les grilles ne sont pas très fiables, ne sont pas très solides, mais elles sont raccordées à Internet, quelle idée ! Honnêtement ! Ce qui veut que des hackers un petit peu malins, un petit peu malintentionnés, auraient assez facilement, en tout ça s’envisage, moyen de pénétrer ces systèmes-là. À partir du moment où on est connecté à Internet il y a une faille possible qui n’attend qu’à être exploitée.

Luc : C’est là où notre méconnaissance de jusqu’où va l’informatique dans la gestion de l’électricité, dans la gestion de l’eau, dans l’organisation du ramassage de nos déchets, de toute la logistique pour remplir les magasins, pour manger, et à quel point tous ces services-là sont dépendants de l’informatique et qu’est-ce qui se passe si, effectivement, tout s’arrête. Moi qui travaille dans les transports publics, on met de l’informatique partout et de plus en plus. Les véhicules sont équipés, les gens reçoivent leurs missions par de l’informatique. Certains modes de transport, comme l’aviation ou le train, gardent une compétence pour faire tout ça en mode papier parce qu’il faut qu’ils puissent continuer à fonctionner en mode dégradé ; ce sont des modes de transport lourds, particulièrement pour l’aviation il y a des moyens parce que ça peut être très dangereux. Mais il y a plein d’autres domaines dont le contrôle routier j’imagine, toute la régulation de trafic par exemple, où tout ça ne fonctionnerait plus. En gros, on peut se retrouver dans un monde où énormément de choses se mettent à ne plus marcher, à commencer par des besoins absolument essentiels.

Manu : II n’y a pas longtemps, j’ai entendu parler d’une vague de dons de clefs USB. Plein de gens ont reçu chez eux des clefs USB, comme ça, par erreur. Surtout ne pas brancher ce genre de chose sur son ordinateur ou sur un autre matériel informatique, c’est clairement un porte d’entrée et là, pour le coup, il n’y a même pas besoin d’être connecté à Internet, ça peut pénétrer un peu partout et faire un malheur.

Luc : Oui, effectivement, c’est un bon exemple, ça ne coûte pas cher et vu le fait que tout le monde achète maintenant des trucs par Internet, c’est finalement intéressant comme manœuvre pour planter des virus sur des ordinateurs qui sont peu protégés. On va se dire faire péter l’ordinateur de monsieur Tout-le-monde, quel est l’intérêt ? En fait, ça peut être également une porte d’entrée, en tout cas un point qui pourra s’activer. On a comme ça, en gros, un agent qui est dormant et qu’on pourra réactiver plus tard.
Un truc qui concerne plutôt la Chine parce qu’on parle beaucoup de la Russie, mais imaginons un conflit avec la Chine, tout le monde se demande s’ils ne vont pas se mettre à foncer vers Taïwan. On a énormément de matériel chinois, on se rappelle que les Américains, notamment Trump, ont fait des misères à Huawei en disant qu’ils n’étaient pas honnêtes et eux fournissent énormément d’équipements pour les infrastructures, donc les routeurs et ce genre de choses. J’ai discuté avec quelqu’un qui travaille chez un fournisseur américain de routeurs qui me disait qu’il ne croyait pas du tout à l’idée d’avoir des routeurs chinois qui soient capables d’espionner, parce que ce sont des machines qui sont très spécialisées et qui n’ont pas la puissance de calcul pour surveiller les millions de données qui passent. En revanche il disait que le scénario extrêmement probable c’est ce qu’on appelle le kill switch.

Manu : Le bouton tueur.

Luc : C’est ça. Cette idée qu’il y a un petit truc caché dans ces équipements, dans le matériel lui-même, et quand il reçoit un signal spécifique par Internet il se met en panne et il arrête de fonctionner. Donc pareil, si on imagine une puissance comme la Chine qui prévoit le fait qu’un jour elle rentrera peut-être en guerre, elle peut dire « je peux arrêter tous les routeurs qui vont arrêter tout trafic » par exemple dans un pays ennemi en disant « j’ai reçu l’ordre de le faire, je le mets en panne » et en se débrouillant pour que ça ne redémarre jamais. Là on touche vraiment l’infrastructure et ça fait vraiment un bordel incroyable de façon durable.

Manu : Petit détail, on est en manque de microprocesseurs en ce moment, Taïwan est fournisseur de microprocesseurs, ça va faire mal si jamais ils attaquent ça !
Bon ! On a déjà beaucoup trop discuté de ce scénario catastrophe !

Luc : On espère que ça ne viendra pas pour 2022.

Manu : Il y a plein de gens qui disent que non, la Russie n’a pas d’intérêts à le faire, mais on ne sait jamais.

Luc : C’est une des choses qui est dite dans l’article, je pense que c’est valable aussi pour la Chine, c’est qu’on a beaucoup tendance à voir les choses de notre point de vue d’Occidentaux très orientés sur le business, le commerce, etc., et que ce n’est pas la représentation du monde de tous les pays et de tous les chefs d’État. Qu’il y a des gens pour qui cette question de la puissance, de la grandeur des nations et des choses comme ça, a du sens. Même si chez nous ce n’est pas le cas, il ne faut pas croire que le monde entier raisonne comme nous.

Manu : Sur ce, j’espère qu’on sera encore là et qu’on rediscutera de tout cela une autre fois. En tout cas à la semaine prochaine.

Luc : Salut.
