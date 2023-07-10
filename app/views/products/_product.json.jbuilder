json.extract! product, :id, :title, :image_urls, :created_at, :updated_at
json.url product_url(product, format: :json)
