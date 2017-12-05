$('document').ready(function(){
    $("#job-save").click(function(){
      console.log("I am in custom file");
      let file_name = $("#job-websiteName").val();
      let env_name = $("#job-websiteEnv").val();
      $.ajax({
          method: "POST",
          url: 'custom-create.php',
          data: { name: file_name, env: env_name }
      }).done(function( msg ) {
          alert( "Data Saved:");
      });
   });
});