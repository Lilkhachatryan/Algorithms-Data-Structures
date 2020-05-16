/**
 * In OLOO (object linked to other objects) is a code style that creates and relates objects
 * directly without the abstraction of class.
 * It implements [[Prototype]]-based behavior delegation.
 * @type {{init: Widget.init, insert: Widget.insert}}
 */

let Widget = {
    init: function (width, height) {
        this.width = width;
        this.height = height;
        this.$element = null;
    },
    insert: function ($where) {
        if (this.$element) {
            this.$element.style.cssText = `
                width: ${this.width}px;
                height: ${this.height}px;
            `;
            $where.appendChild(this.$element);
        }
    }
};

let Button = {
    setup: function (width, height, label) {
        this.init(width, height);
        this.label = label || 'Default';

        this.$element = document.createElement("button");
        this.$element.innerText = this.label;
    },
    build: function ($where) {
        this.insert($where);
        this.$element.addEventListener('click', this.onClick.bind(this));
    },
    onClick: function (event) {
        console.log(`Button ${this.label} clicked!`);
    }
};

Object.setPrototypeOf(Button, Widget);

(function() {
    let body = document.body;

    let btn1 = Object.create(Button);
    btn1.setup(120, 30, 'Button1');

    let btn2 = Object.create(Button);
    btn2.setup(140, 200, 'Button2');

    btn1.build(body);
    btn2.build(body);

})();
