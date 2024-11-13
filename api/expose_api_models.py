from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Animal, method_decorators= method_decorators)
    api.expose_object(database.models.Habitat, method_decorators= method_decorators)
    api.expose_object(database.models.ConservationProject, method_decorators= method_decorators)
    api.expose_object(database.models.EndangeredSpeciesList, method_decorators= method_decorators)
    api.expose_object(database.models.IllegalActivity, method_decorators= method_decorators)
    api.expose_object(database.models.PatrolIncident, method_decorators= method_decorators)
    api.expose_object(database.models.RangerPatrol, method_decorators= method_decorators)
    api.expose_object(database.models.Plant, method_decorators= method_decorators)
    api.expose_object(database.models.Ranger, method_decorators= method_decorators)
    api.expose_object(database.models.ResearchStudy, method_decorators= method_decorators)
    api.expose_object(database.models.Researcher, method_decorators= method_decorators)
    api.expose_object(database.models.ResearcherStudyLink, method_decorators= method_decorators)
    return api
