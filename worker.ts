interface Env {ASSETS:{fetch:(request:Request)=>Promise<Response>}}
const worker = {async fetch(request:Request,env:Env){const url=new URL(request.url);if(url.hostname==='www.endofabyss.quest'||url.protocol==='http:'){url.hostname='endofabyss.quest';url.protocol='https:';return Response.redirect(url.toString(),301)}return env.ASSETS.fetch(request)}};

export default worker;
