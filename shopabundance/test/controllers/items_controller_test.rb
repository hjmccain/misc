require 'test_helper'

class ItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get items_url
    assert_response :success
  end

  test "should get show" do
    get items_url, params: { id: 12 }
    assert_response :success
  end

  test "should get new" do
    get items_new_url
    assert_response :success
  end

  # test "should get edit" do
  #   assert_response :success
  # end

  # test "should create new item" do
  #   assert_response :success
  # end

  # test "should update item" do
  #   assert_response :success
  # end

  # test "should destroy item" do
  #   assert_response :success
  # end

end
