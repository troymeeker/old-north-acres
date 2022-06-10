class BookingsController < ApplicationController
    
     # GET /bookings
  def index
    bookings = Booking.all

    render json: bookings
  end

  # # GET /booking/1
  def show
    booking = find_booking
    render json: booking
  end

  
# create new booking
 

  private
  #   # Use callbacks to share common setup or constraints between actions.
    def find_booking
       Booking.find(params[:id])
    end



end
