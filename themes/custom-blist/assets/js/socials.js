document.querySelector('.copyToClipboard').addEventListener('click', function () {
    var inputWithLinkValue = document.createElement('input');
    var text = window.location.href;

    document.body.appendChild(inputWithLinkValue);
    inputWithLinkValue.value = text;
    inputWithLinkValue.select();
    document.execCommand('copy');
    document.body.removeChild(inputWithLinkValue);

    document.querySelector('.toast').classList.remove("invisible");
    setTimeout(() => {
        document.querySelector('.toast').classList.add("invisible");
    }, 3000);
});