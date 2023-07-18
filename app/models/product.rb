class Product < ApplicationRecord
    def image_urls
        image_urls_text.split(',').map(&:strip)
    end
end
