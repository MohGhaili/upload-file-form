var fileChooser = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.user-pic');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];


    if (file) {
      
      var reader = new FileReader();
      var filename = file.name;

      reader.addEventListener('load', function () {
        preview.src = reader.result;
        document.querySelector('.custom-file-control-2').textContent = filename;
        console.log(reader);
        
      });

      reader.readAsDataURL(file);
    }
  });