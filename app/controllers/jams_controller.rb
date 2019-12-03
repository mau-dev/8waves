class JamsController < ApplicationController
  before_action :set_jam, only: [:show, :edit, :update, :destroy]

  # GET /jams
  # GET /jams.json
  def index
    @jams = Jam.all
    # @jams = Jam.find(params[:id])
  end

  # GET /jams/1
  # GET /jams/1.json
  def show
    @jams = Jam.find(params[:id])
  end

  # GET /jams/new
  def new
    @jam = Jam.new
  end

  # GET /jams/1/edit
  def edit
   @jams = Jam.find(params[:id])
  end

  # POST /jams
  # POST /jams.json
  def create
    p '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
    p params[:jam]
    p '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

    @jam = Jam.new(:title => request.params[:title] ,  user: current_user, :content => request.params[:data])
    @jam.save
    #:title => request.params[:jamTitle]


    respond_to do |format|
      if @jam.save
        p "success"
        format.html { redirect_to @jam }
        format.json { render json:"ok" }
      else
        p "fail"
      end
    end
  end

  # PATCH/PUT /jams/1
  # PATCH/PUT /jams/1.json
  def update
    respond_to do |format|
      if @jam.update(jam_params)
        format.html { redirect_to @jam, notice: 'Jam was successfully updated.' }
        format.json { render :show, status: :ok, location: @jam }
      else
        format.html { render :edit }
        format.json { render json: @jam.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /jams/1
  # DELETE /jams/1.json
  def destroy
    @jam.destroy
    respond_to do |format|
      format.html { redirect_to jams_url, notice: 'Jam was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def getCell
    @jam.find()
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jam
      @jam = Jam.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def jam_params
      params.require(:jam).permit(:title, :content, :user_id)
    end
end