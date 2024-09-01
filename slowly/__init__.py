import os

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from config import Config


# db = SQLAlchemy()

def create_app(config_class=Config):
    """
    Application Factory

    This function contains any configuration and setup the application needs
    and returns the application 
    """
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    # load configurations
    app.config.from_object(config_class)

    app.static_folder = "../static"

    # intiialize database
    # db.init_app(app)

    # with app.app_context():
    #     # include routes and models
    #     from . import models, routes
    #     # create tables in database
    #     db.create_all()
    #     # register blueprints
    #     app.register_blueprint(routes.experiences_bp)

    @app.route("/")
    def wassup():
        return render_template('base.html')
    
    return app