defmodule FirstOne.PageController do
  use FirstOne.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
