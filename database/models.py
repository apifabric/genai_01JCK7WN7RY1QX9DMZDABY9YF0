# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 13, 2024 17:08:01
# Database: sqlite:////tmp/tmp.4tjXCIiigP-01JCK7WN7RY1QX9DMZDABY9YF0/TropicalWildlifeMgmt/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Habitat(SAFRSBaseX, Base):
    """
    description: Represents different types of habitats in the rainforest.
    """
    __tablename__ = 'habitats'
    _s_collection_name = 'Habitat'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    climate = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    AnimalList : Mapped[List["Animal"]] = relationship(back_populates="habitat")
    PlantList : Mapped[List["Plant"]] = relationship(back_populates="habitat")



class Ranger(SAFRSBaseX, Base):
    """
    description: Represents a ranger responsible for patrolling the rainforest.
    """
    __tablename__ = 'rangers'
    _s_collection_name = 'Ranger'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    assigned_area = Column(String)
    experience_years = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    RangerPatrolList : Mapped[List["RangerPatrol"]] = relationship(back_populates="ranger")



class ResearchStudy(SAFRSBaseX, Base):
    """
    description: Represents scientific research studies conducted in the rainforest.
    """
    __tablename__ = 'research_studies'
    _s_collection_name = 'ResearchStudy'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String)
    focus_area = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    study_lead = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ResearcherStudyLinkList : Mapped[List["ResearcherStudyLink"]] = relationship(back_populates="study")



class Researcher(SAFRSBaseX, Base):
    """
    description: Represents a researcher involved in rainforest studies.
    """
    __tablename__ = 'researchers'
    _s_collection_name = 'Researcher'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    specialization = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ResearcherStudyLinkList : Mapped[List["ResearcherStudyLink"]] = relationship(back_populates="researcher")



class Animal(SAFRSBaseX, Base):
    """
    description: Represents an animal in the tropical rainforest.
    """
    __tablename__ = 'animals'
    _s_collection_name = 'Animal'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    species = Column(String)
    common_name = Column(String)
    habitat_id = Column(ForeignKey('habitats.id'))
    population = Column(Integer)

    # parent relationships (access parent)
    habitat : Mapped["Habitat"] = relationship(back_populates=("AnimalList"))

    # child relationships (access children)
    ConservationProjectList : Mapped[List["ConservationProject"]] = relationship(back_populates="species_target")
    EndangeredSpeciesListList : Mapped[List["EndangeredSpeciesList"]] = relationship(back_populates="species")
    IllegalActivityList : Mapped[List["IllegalActivity"]] = relationship(back_populates="involved_species")



class Plant(SAFRSBaseX, Base):
    """
    description: Represents a plant species found in the rainforest.
    """
    __tablename__ = 'plants'
    _s_collection_name = 'Plant'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    species_name = Column(String)
    common_name = Column(String)
    habitat_id = Column(ForeignKey('habitats.id'))

    # parent relationships (access parent)
    habitat : Mapped["Habitat"] = relationship(back_populates=("PlantList"))

    # child relationships (access children)



class RangerPatrol(SAFRSBaseX, Base):
    """
    description: Represents ranger patrols conducted in the rainforest.
    """
    __tablename__ = 'ranger_patrols'
    _s_collection_name = 'RangerPatrol'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    ranger_id = Column(ForeignKey('rangers.id'))
    date = Column(DateTime)
    area_patrolled = Column(String)

    # parent relationships (access parent)
    ranger : Mapped["Ranger"] = relationship(back_populates=("RangerPatrolList"))

    # child relationships (access children)
    PatrolIncidentList : Mapped[List["PatrolIncident"]] = relationship(back_populates="patrol")



class ResearcherStudyLink(SAFRSBaseX, Base):
    """
    description: Represents the link between researchers and research studies.
    """
    __tablename__ = 'researcher_study_links'
    _s_collection_name = 'ResearcherStudyLink'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    researcher_id = Column(ForeignKey('researchers.id'))
    study_id = Column(ForeignKey('research_studies.id'))

    # parent relationships (access parent)
    researcher : Mapped["Researcher"] = relationship(back_populates=("ResearcherStudyLinkList"))
    study : Mapped["ResearchStudy"] = relationship(back_populates=("ResearcherStudyLinkList"))

    # child relationships (access children)



class ConservationProject(SAFRSBaseX, Base):
    """
    description: Represents conservation projects aimed at preserving wildlife.
    """
    __tablename__ = 'conservation_projects'
    _s_collection_name = 'ConservationProject'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    species_target_id = Column(ForeignKey('animals.id'))

    # parent relationships (access parent)
    species_target : Mapped["Animal"] = relationship(back_populates=("ConservationProjectList"))

    # child relationships (access children)



class EndangeredSpeciesList(SAFRSBaseX, Base):
    """
    description: Represents lists of endangered species.
    """
    __tablename__ = 'endangered_species_lists'
    _s_collection_name = 'EndangeredSpeciesList'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    species_id = Column(ForeignKey('animals.id'))
    status = Column(String)
    list_date = Column(DateTime)

    # parent relationships (access parent)
    species : Mapped["Animal"] = relationship(back_populates=("EndangeredSpeciesListList"))

    # child relationships (access children)



class IllegalActivity(SAFRSBaseX, Base):
    """
    description: Represents illegal activities reported in the rainforest.
    """
    __tablename__ = 'illegal_activities'
    _s_collection_name = 'IllegalActivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    report_date = Column(DateTime)
    location = Column(String)
    involved_species_id = Column(ForeignKey('animals.id'))

    # parent relationships (access parent)
    involved_species : Mapped["Animal"] = relationship(back_populates=("IllegalActivityList"))

    # child relationships (access children)



class PatrolIncident(SAFRSBaseX, Base):
    """
    description: Represents incidents reported during ranger patrols.
    """
    __tablename__ = 'patrol_incidents'
    _s_collection_name = 'PatrolIncident'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    patrol_id = Column(ForeignKey('ranger_patrols.id'))
    description = Column(String)
    date_reported = Column(DateTime)

    # parent relationships (access parent)
    patrol : Mapped["RangerPatrol"] = relationship(back_populates=("PatrolIncidentList"))

    # child relationships (access children)
