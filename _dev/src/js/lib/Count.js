import $ from 'jquery';

export default class Count {
  constructor(opts = {}) {
    self = this
    $.each(opts, (key) => {
      self[key] = opts[key]
    })

    self.$input.on("focus", () => {
      self.intervalID = setInterval(function() {
        self.monitering()
      }, 100);
    }).on("blur", () => {
      clearInterval(self.intervalID);
    })
    self.$reset.on("click", () => {
      self.$input.val("")
      self.monitering()
    })
  }
  monitering() {
    self = this
    let text = self.$input.val()
    let count = text.replace(/\r\n|\n/g, "").length
    let count_nos = text.replace(/\s|\r\n|\n/g, "").length
    let line = text.match(/\r\n|\n/g) ? text.match(/\r\n|\n/g).length + 1 : 0 + (!!count - 0)
    let para = text.match(/\r\n{2,}|\n{2,}/g) ? text.match(/\r\n{2,}|\n{2,}/g).length + 1 : 0 + (!!count - 0)
    self.$output_c.text(count)
    self.$output_g.text(count > 0 ? ((count - 1) / 400) | 0 ? (((count - 1) / 400) | 0) + 1 : 1 : 0)
    self.$output_g.text(((count - 1) / 400) | 0 ? (((count - 1) / 400) | 0) + 1 : !!count - 0)
    self.$output_cs.text(count_nos)
    self.$output_l.text(line)
    self.$output_p.text(para)
  }
}
