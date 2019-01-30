class SubMenu {
    constructor(id, headlink, headurl, items){
        this.id = id;
        this.headlink = headlink;
        this.headurl = headurl;
        this.items = items;
    }
    render(){
        let result = `<li><a href="${this.headurl}">${this.headlink}</a><ul class="submenu" id="${this.id}">`;
        for (let item of this.items){
            if (item instanceof MenuItem){
                result += item.render();
            }
        }
        result += `</ul></li>`;
        return result;
    }

}