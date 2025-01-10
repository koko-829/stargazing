# routes.rbでルーティングを記載した時に、自動的に上書きされるテストファイル。
# 実際にルーティングが正しく行われているかを確認される。
# bin/rails test test/controllers/stars_controller_test.rbとかで手動で確認できる。

require "test_helper"

class StarsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get new_star_url
    assert_response :success
  end
end
