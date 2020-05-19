$("button").click(function() {
  const searchTerm = $("input").val();
  const url = "https://api.genius.com/search?access_token=BJHEGDhszQmoS6jIsRCw2ERxrYpbnMkCEpPAe7JWeT9jBA_iv1JxT8liOMQs3hgg&q=" + searchTerm;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.response.hits[0].result.full_title);
      $("ol").empty();
      data.response.hits.forEach(element => {
          $("ol").append("<li>"+element.result.full_title+"</li>")
      });
    });
});