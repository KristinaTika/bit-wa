
export const displayData = (data) => {
    const wrapper = $(".wrapper");
        data.forEach((post) =>{
            const $post = $(`<div class="row">
            <div >
              <div class="card blue-grey darken-1">
                <div class="card-content white-text" data-id= ${post.id}>
                  <span class="card-title">${post.title}</span>
                  <p>${post.intro}</p>
                </div>
              </div>
            </div>
            </div>`)
       
            wrapper.append($post);
        })
      
} 


