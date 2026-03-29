task default: %i[docker:build]

TAG = "unixs/hlds:front-latest".freeze
PLATFORMS = %w(linux/amd64 linux/arm64).freeze

namespace :docker do
  desc "Build image"
  task :build do
    sh " docker buildx build --platform #{PLATFORMS.join(',')} -t #{TAG} ."
  end

  desc "Push image to registry"
  task :push do
    sh "docker push #{TAG}"
  end

  desc "Build and push image to registry"
  task release: %i[docker:build docker:push]
end
