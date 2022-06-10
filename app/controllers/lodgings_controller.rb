class LodgingsController < ApplicationController

         # GET /lodgings
  def index

    lodgings = Lodging.all 
    render json: lodgings
  end

  # # GET /lodging/1
  def show
    lodging = find_lodging
    render json: lodging
  end

  

 

  private
  #   # Use callbacks to share common setup or constraints between actions.
    def find_lodging
       Lodging.find(params[:id])
    end

end
