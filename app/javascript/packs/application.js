// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

window.bootstrap = require("bootstrap");

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap"
import "jquery"
import "@popperjs/core"
import "jquery-easing"
import "datatables"
import "fontawesome-free"

require('../stylesheets/application.scss');

import "../jquery/jquery"

import "../bootstrap/js/bootstrap.bundle.min"
import "../jquery-easing/jquery.easing.min"

Rails.start()
Turbolinks.start()
ActiveStorage.start()