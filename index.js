function changeImage() {
    const myImage = document.querySelector("img");

    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/hobbies/polaroid.jpg") {
        myImage.setAttribute("src", "images/hobbies/beach.jpg");
    } else {
        myImage.setAttribute("src", "images/hobbies/polaroid.jpg");
    }
    };

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeImage').addEventListener('click', function() {
        changeImage();
    });

    const showAlertButton = document.getElementById('showAlert');

    showAlertButton.addEventListener('click', function() {
        alert('show alert button clicked!');
    });
});
