class StarsController < ApplicationController
  def new
    @star = Star.new
  end

  def create
    @star = Star.new(stars_params)
    if @star.save
      session[:star_id] = Star.offset(rand(Star.count)).first.id
      redirect_to result_stars_path
    else
      redirect_to root_path
    end
  end

  def result
    if session[:star_id].nil?
      redirect_to root_path
    else
      @selected_star = Star.find(session[:star_id])
    end
  end

  # あとで削除。挙動確認用ファイル。
  def template
  end
end

private
def stars_params
  params.require(:star).permit(:name, :word)
end
