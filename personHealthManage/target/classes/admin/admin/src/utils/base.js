const base = {
    get() {
        return {
            url : "http://localhost:8080/gerenjiankangguanlixitong/",
            name: "gerenjiankangguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gerenjiankangguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个人健康管理系统小程序"
        } 
    }
}
export default base
