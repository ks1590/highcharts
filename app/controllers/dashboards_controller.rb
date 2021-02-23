class DashboardsController < ApplicationController
  def index
    @end_at = Date.today
    @start_at = @end_at - 6
    @categories = @start_at.upto(@end_at).to_a
    @data = [5, 6, 3, 1, 2, 4, 7]

    @h = LazyHighCharts::HighChart.new("graph") do |f|
      f.chart(:type => "column")
      f.title(:text => "月間支出")
      f.xAxis(:categories => @categories)
      f.series(:name => "小計",
              :data => @data)
    end
  end

  def create
  end

  def show
  end
end