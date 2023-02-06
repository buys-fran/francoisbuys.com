# frozen_string_literal: true

Bridgetown.configure do |_|
  init :dotenv

  require 'bridgetown_notion'

  # you can configure site settings here just like you would in bridgetown.config.yml
  permalink 'pretty'
  template_engine 'erb'
  timezone 'Africa/Johannesburg'
  url '' # the base hostname & protocol for your site, e.g. https://example.com
end
