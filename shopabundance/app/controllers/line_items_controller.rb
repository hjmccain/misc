class LineItemsController < ApplicationController

  def index
  end

  def all_line_items
    @line_items = LineItem.all
  end

  def show
    @line_item = LineItem.find(params[:id])
  end

  def new
    @line_item = LineItem.new
  end

  def edit
  end

  def create
    @line_item = LineItem.new(line_item_params)

    if @line_item.save
      redirect_to all_line_items_line_items_path, notice: 'Inventory quantity was updated.'
    else
      render 'new'
    end
  end

  def update
  end

  def destroy
  end

  private
    def line_item_params
      params.require(:line_item).permit(:item_id, :qty, :price, :item)
    end

end
