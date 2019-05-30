#!/usr/bin/env ruby

require 'bundler/setup'
require 'mini_racer'

FILE = './dist/store_app_node.js'
# FILE = './dist/rt.js'

context = MiniRacer::Context.new
context.eval "var global = global || this;"
context.eval "var self = self || this;"
context.eval File.read FILE
puts 'mini_racer: OK'