const allShader = document.querySelectorAll('.ShowcaseItemShader');

allShader.forEach(Shader => {
    Shader.parentElement.addEventListener('mouseover',()=>{
        Shader.style.setProperty('transform', 'translateX(0)');
    });
    Shader.onmouseout = function(event) {
        /* event.target: parent element */
        Shader.style.setProperty('transform', 'translateX(-100%)');
    };
});