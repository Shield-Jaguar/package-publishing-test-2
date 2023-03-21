Gem::Specification.new do |s|
  s.name = 'apimatic_calculator'
  s.version = '1.0.0'
  s.summary = 'apimatic_calculator'
  s.description = 'Simple calculator API hosted on APIMATIC'
  s.authors = ['APIMatic SDK Generator']
  s.email = ['support@apimatic.io']
  s.homepage = 'https://apimatic.io'
  s.licenses = ['MIT']
  s.add_dependency('apimatic_core_interfaces', '~> 0.1.0')
  s.add_dependency('apimatic_core', '~> 0.2.0')
  s.add_dependency('apimatic_faraday_client_adapter', '~> 0.1.0')
  s.add_development_dependency('minitest', '~> 5.14', '>= 5.14.1')
  s.add_development_dependency('minitest-proveit', '~> 1.0')
  s.required_ruby_version = ['>= 2.6']
  s.files = Dir['{bin,lib,man,test,spec}/**/*', 'README*', 'LICENSE*']
  s.require_paths = ['lib']
end