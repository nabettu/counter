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
    let line = text.match(/\r\n|\n/g)
    if (line) {
      line = line.length + 1
    } else {
      line = 0 + (!!count - 0)
    }
    let para = text.match(/\r\n{2,}|\n{2,}/g)
    if (para) {
      para = para.length + 1
    } else {
      para = 0 + (!!count - 0)
    }
    self.$output_c.text(count)
    self.$output_cs.text(count_nos)
    self.$output_l.text(line)
    self.$output_p.text(para)
  }
}
