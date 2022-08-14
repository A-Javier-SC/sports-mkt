arrayImages=[]

window.addEventListener('DOMContentLoaded', () => {
    fetch('/data/slider.json')
        .then(resp => resp.json())
        .then(data => arrayImages= data)
});

function changeImage({currentTarget}){
    const idButton= currentTarget.id

    const image1 = arrayImages [0] .imageRocket;
    const image2 = arrayImages [1] .imageRocket;

}
