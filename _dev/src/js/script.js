import Count from './lib/Count'
import $ from 'jquery'

var doms = {
  $input: $(".js-input"),
  $reset: $(".js-reset"),
  $output_c: $(".js-output_count"),
  $output_cs: $(".js-output_count_nospace"),
  $output_l: $(".js-output_line"),
  $output_p: $(".js-output_para")
}
const count = new Count(doms)
