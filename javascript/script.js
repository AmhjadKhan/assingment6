
const handClaps = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data = await response.json();

  const tabContainer = document.getElementById('tab-container');
  data.data.forEach((category) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <button onclick="handleAll(${category.category_id})" class="btn btn-outline-primary" type="submit">${category.category}</button>
      `
      tabContainer.appendChild(div);
  });
}

const handleAll = async (categoryId) => {
//   console.log(categoryId);

  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
  const data = await response.json();

  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';

  if (data.data.length === 0) {
      const div = document.createElement('div');
      div.innerHTML = `
        <card class='card card w-96 bg-base-100 shadow-xl ml-96  mt-32'>
          <div class="hlwdata">
              <img class="ml-20" src="image/icon.png" alt="icon" />
              <h1 class="text-4xl text-bolder">Opps!!!sorry,There is no<br>content here </h1>
          </div>
          <card>
      `;
      cardContainer.appendChild(div);
  } else {
      data.data.forEach((news) => {
        console.log(news)
          const div = document.createElement('div');
          div.innerHTML = `
              <div class="card card w-80 bg-base-100 shadow-xl">
                  <figure><img src=${news?.thumbnail} alt="picture" /></figure>
                  <h1 class="text-2xl">${news?.title}</h1>
                  <div class="card-body">  
                      <div class="card-actions mt-8">
                          <div class="avater-online flex gap-4">
                              <div class="w-14 rounded-full">
                                  <img class='rounded-full' src=${news?.authors.profile_picture} alt="">
                              </div>
                              <p>${news.authors.profile_name}</p>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          cardContainer.appendChild(div);
      });
  }
}

handClaps();
handleAll('1000');
