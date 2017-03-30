module ItemsHelper

  def empty_list?
    if Item.all.length < 1
      render :partial => '/items/partials/start_product_list'
    else
      render :partial => '/items/partials/product_list'
    end
  end

end
