class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def show
    @item = Item.find(params[:id])
  end

  def stock
    @item = Item.find(params[:id])
    @line_item = LineItem.new
  end

  def order
  end

  def new
    @item = Item.new
  end

  def edit
    @item = Item.find(params[:id])
  end

  def market
    @items = Item.all
  end

  def inventory
    @items = Item.all
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      redirect_to items_path, notice: 'An item was added to your product list.'
    else
      render 'new'
    end
  end

  def update
    @item = Item.find(params[:id])

    if @item.update(item_params)
      redirect_to items_path, notice: 'An item in your product list was updated.'
    else
      render 'edit'
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy

    redirect_to items_path, notice: 'An item was removed from your product list.'
  end

  def all
    Item.destroy_all

    redirect_to items_path
  end

  private
    def item_params
      params.require(:item).permit(:category, :name, :price, :unit, :current_inventory)
    end

end
