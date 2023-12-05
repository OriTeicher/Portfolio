export const projectsService = {
     createProject
}

function createProject(title: string, desc: string, imgUrl: string) {
     return {
          title,
          desc,
          imgUrl
     }
}
