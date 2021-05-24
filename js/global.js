// Gerar Assinatura
function gerarFunction() {
    $('td.nome').text($('input.nome').val());

    $('td.cargo').text($('input.cargo').val());
    
    $('a.telefone').attr('href', `tel:+55${$('input.telefone').val().replace(/[^0-9]/g, "")}`).text(`${$('input.telefone').val()}`);

    $('a.celular').attr('href', `tel:+55${$('input.celular').val().replace(/[^0-9]/g, "")}`).text(`${$('input.celular').val()}`);
}

// Corrigir URL
const baseurl = () => {
    return window.location.href
        .split('/')
        .slice(0, -1)
        .join('/');
}

const source = (base, element) => {
    return `${base}/${$(element).attr('src')}`;
}

$(document).ready(function() {
    $.each($('img'), function(index, element) {
        $(element).attr('src', source(baseurl(), element));
    });
});

// Mascara Telefone
$(document).ready(function(){
    const s=s=>11===s.replace(/\D/g,"").length?"(00) 00000-0000":"(00) 0000-00009";

    $(".mask-brphones").mask(s,{
        onKeyPress:function(a,m,e,k){e.mask(s.apply({},arguments),k)}
    })
});

// Copiar
function copyFunction(el = document.getElementById("table")) {
    var body = document.body, range, sel;

    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();

        try {
            range.selectNodeContents(el);
            sel.addRange(range);
        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
        }
    }
    else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
    document.execCommand('Copy');
    alert("Assinatura Copiada!");
}

// Copiar Código Fonte
function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
    }
    
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    alert("Código Fonte Copiado!");
};