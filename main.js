function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/T1E1zOlRF/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('alien1')
        img1 = document.getElementById('alien2')
        img2 = document.getElementById('alien3')
        img3 = document.getElementById('alien4')

        if (results[0].label == "Clap") {
            img.src = 'https://i.pinimg.com/originals/7f/b1/a8/7fb1a8cfeb2c9bb9097019796cdda1d0.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'https://th.bing.com/th/id/OIP.UuUyrtxk2Y2zYKA7lPsxMwHaHa?pid=ImgDet&w=480&h=480&rs=1';
        } else if (results[0].label == "Bell") {
            img.src = 'aliens-01.png';
            img1.src = 'https://media2.giphy.com/media/3ov9k4igEos0U58OWs/giphy.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'https://th.bing.com/th/id/OIP.UuUyrtxk2Y2zYKA7lPsxMwHaHa?pid=ImgDet&w=480&h=480&rs=1';
        } else if (results[0].label == "Snapping") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'https://th.bing.com/th/id/R.ee94331b512a3061400a8061c7d2ed24?rik=UBLesqdyRBkt%2bg&riu=http%3a%2f%2fbestanimations.com%2fAnimals%2fMammals%2fCats%2fLions%2fanimated-lion-gif-11.gif&ehk=Oku5KgvKddvO%2fz3PIwaEYtLTbquRRrjbYFpCl0gn%2bFE%3d&risl=&pid=ImgRaw&r=0';
            img3.src = 'https://th.bing.com/th/id/OIP.UuUyrtxk2Y2zYKA7lPsxMwHaHa?pid=ImgDet&w=480&h=480&rs=1';
        } else {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'https://media0.giphy.com/media/1zhI2Opt6xUwBzuvW4/giphy.gif';
        }
    }
}