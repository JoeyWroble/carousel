class Product < ApplicationRecord
    
    def new_image_urls
        
    end

    def image_urls
        image_urls = new_image_urls
        image_urls_text.split(',').map(&:strip)
    end
end
