# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Animal(Base):
    """description: Represents an animal in the tropical rainforest."""
    __tablename__ = 'animals'
    id = Column(Integer, primary_key=True)
    species = Column(String)
    common_name = Column(String)
    habitat_id = Column(Integer, ForeignKey('habitats.id'))
    population = Column(Integer)


class Habitat(Base):
    """description: Represents different types of habitats in the rainforest."""
    __tablename__ = 'habitats'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    climate = Column(String)


class ConservationProject(Base):
    """description: Represents conservation projects aimed at preserving wildlife."""
    __tablename__ = 'conservation_projects'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime, nullable=True)
    species_target_id = Column(Integer, ForeignKey('animals.id'))


class ResearchStudy(Base):
    """description: Represents scientific research studies conducted in the rainforest."""
    __tablename__ = 'research_studies'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    focus_area = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime, nullable=True)
    study_lead = Column(String)


class Researcher(Base):
    """description: Represents a researcher involved in rainforest studies."""
    __tablename__ = 'researchers'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    specialization = Column(String)


class ResearcherStudyLink(Base):
    """description: Represents the link between researchers and research studies."""
    __tablename__ = 'researcher_study_links'
    id = Column(Integer, primary_key=True)
    researcher_id = Column(Integer, ForeignKey('researchers.id'))
    study_id = Column(Integer, ForeignKey('research_studies.id'))


class IllegalActivity(Base):
    """description: Represents illegal activities reported in the rainforest."""
    __tablename__ = 'illegal_activities'
    id = Column(Integer, primary_key=True)
    type = Column(String)
    report_date = Column(DateTime)
    location = Column(String)
    involved_species_id = Column(Integer, ForeignKey('animals.id'))


class Ranger(Base):
    """description: Represents a ranger responsible for patrolling the rainforest."""
    __tablename__ = 'rangers'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    assigned_area = Column(String)
    experience_years = Column(Integer)


class RangerPatrol(Base):
    """description: Represents ranger patrols conducted in the rainforest."""
    __tablename__ = 'ranger_patrols'
    id = Column(Integer, primary_key=True)
    ranger_id = Column(Integer, ForeignKey('rangers.id'))
    date = Column(DateTime)
    area_patrolled = Column(String)


class PatrolIncident(Base):
    """description: Represents incidents reported during ranger patrols."""
    __tablename__ = 'patrol_incidents'
    id = Column(Integer, primary_key=True)
    patrol_id = Column(Integer, ForeignKey('ranger_patrols.id'))
    description = Column(String)
    date_reported = Column(DateTime)


class Plant(Base):
    """description: Represents a plant species found in the rainforest."""
    __tablename__ = 'plants'
    id = Column(Integer, primary_key=True)
    species_name = Column(String)
    common_name = Column(String)
    habitat_id = Column(Integer, ForeignKey('habitats.id'))


class EndangeredSpeciesList(Base):
    """description: Represents lists of endangered species."""
    __tablename__ = 'endangered_species_lists'
    id = Column(Integer, primary_key=True)
    species_id = Column(Integer, ForeignKey('animals.id'))
    status = Column(String)
    list_date = Column(DateTime)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import datetime

habitat1 = Habitat(id=1, name='Amazon Rainforest', climate='Tropical')
habitat2 = Habitat(id=2, name='Congo Basin', climate='Humid')
habitat3 = Habitat(id=3, name='Southeast Asian Rainforest', climate='Equatorial')
habitat4 = Habitat(id=4, name='Daintree Rainforest', climate='Wet Tropical')

animal1 = Animal(id=1, species='Panthera onca', common_name='Jaguar', habitat_id=1, population=150)
animal2 = Animal(id=2, species='Gorilla gorilla', common_name='Western Gorilla', habitat_id=2, population=300)
animal3 = Animal(id=3, species='Orangutan', common_name='Orangutan', habitat_id=3, population=200)
animal4 = Animal(id=4, species='Cassowary', common_name='Cassowary', habitat_id=4, population=50)

conservation_project1 = ConservationProject(id=1, name='Save the Jaguar', start_date=datetime(2021, 5, 1), end_date=None, species_target_id=1)
conservation_project2 = ConservationProject(id=2, name='Gorilla Protection', start_date=datetime(2020, 3, 15), end_date=None, species_target_id=2)
conservation_project3 = ConservationProject(id=3, name='Orangutan Rescue', start_date=datetime(2022, 8, 20), end_date=None, species_target_id=3)
conservation_project4 = ConservationProject(id=4, name='Cassowary Conservation', start_date=datetime(2019, 11, 10), end_date=None, species_target_id=4)

research_study1 = ResearchStudy(id=1, title='Jaguar Behavior Study', focus_area='Behavioral Science', start_date=datetime(2021, 6, 9), end_date=datetime(2023, 6, 9), study_lead='Dr. Smith')
research_study2 = ResearchStudy(id=2, title='Gorilla Dietary Patterns', focus_area='Nutrition', start_date=datetime(2020, 7, 22), end_date=datetime(2022, 7, 22), study_lead='Dr. Jones')
research_study3 = ResearchStudy(id=3, title='Orangutan Social Structures', focus_area='Social Science', start_date=datetime(2023, 1, 5), end_date=None, study_lead='Dr. Brown')
research_study4 = ResearchStudy(id=4, title='Cassowary Habitat Preferences', focus_area='Ecology', start_date=datetime(2019, 10, 1), end_date=datetime(2021, 10, 1), study_lead='Dr. Green')

researcher1 = Researcher(id=1, name='John Doe', specialization='Zoology')
researcher2 = Researcher(id=2, name='Jane Roe', specialization='Botany')
researcher3 = Researcher(id=3, name='Jim Bo', specialization='Ecology')
researcher4 = Researcher(id=4, name='Jill Woo', specialization='Conservation Science')

researcher_study_link1 = ResearcherStudyLink(id=1, researcher_id=1, study_id=1)
researcher_study_link2 = ResearcherStudyLink(id=2, researcher_id=2, study_id=2)
researcher_study_link3 = ResearcherStudyLink(id=3, researcher_id=3, study_id=3)
researcher_study_link4 = ResearcherStudyLink(id=4, researcher_id=4, study_id=4)

illegal_activity1 = IllegalActivity(id=1, type='Poaching', report_date=datetime(2023, 4, 20), location='Section A', involved_species_id=1)
illegal_activity2 = IllegalActivity(id=2, type='Logging', report_date=datetime(2022, 8, 14), location='Section B', involved_species_id=2)
illegal_activity3 = IllegalActivity(id=3, type='Mining', report_date=datetime(2021, 3, 2), location='Section C', involved_species_id=3)
illegal_activity4 = IllegalActivity(id=4, type='Fire', report_date=datetime(2020, 12, 11), location='Section D', involved_species_id=4)

ranger1 = Ranger(id=1, name='Ranger Rick', assigned_area='North', experience_years=5)
ranger2 = Ranger(id=2, name='Ranger Sue', assigned_area='South', experience_years=10)
ranger3 = Ranger(id=3, name='Ranger Tom', assigned_area='East', experience_years=3)
ranger4 = Ranger(id=4, name='Ranger Pam', assigned_area='West', experience_years=7)

ranger_patrol1 = RangerPatrol(id=1, ranger_id=1, date=datetime(2023, 4, 5), area_patrolled='North')
ranger_patrol2 = RangerPatrol(id=2, ranger_id=2, date=datetime(2022, 3, 10), area_patrolled='South')
ranger_patrol3 = RangerPatrol(id=3, ranger_id=3, date=datetime(2021, 8, 15), area_patrolled='East')
ranger_patrol4 = RangerPatrol(id=4, ranger_id=4, date=datetime(2020, 1, 20), area_patrolled='West')

patrol_incident1 = PatrolIncident(id=1, patrol_id=1, description='Signs of poaching.', date_reported=datetime(2023, 4, 5))
patrol_incident2 = PatrolIncident(id=2, patrol_id=2, description='Illegal logging detected.', date_reported=datetime(2022, 3, 10))
patrol_incident3 = PatrolIncident(id=3, patrol_id=3, description='Mining operations noticed.', date_reported=datetime(2021, 8, 15))
patrol_incident4 = PatrolIncident(id=4, patrol_id=4, description='Forest fire spotted.', date_reported=datetime(2020, 1, 20))

plant1 = Plant(id=1, species_name='Ficus lyrata', common_name='Fiddle Leaf Fig', habitat_id=1)
plant2 = Plant(id=2, species_name='Monstera deliciosa', common_name='Swiss Cheese Plant', habitat_id=2)
plant3 = Plant(id=3, species_name='Dracaena trifasciata', common_name='Snake Plant', habitat_id=3)
plant4 = Plant(id=4, species_name='Epipremnum aureum', common_name='Golden Pothos', habitat_id=4)

endangered_species_list1 = EndangeredSpeciesList(id=1, species_id=1, status='Endangered', list_date=datetime(2021, 12, 1))
endangered_species_list2 = EndangeredSpeciesList(id=2, species_id=2, status='Critically Endangered', list_date=datetime(2020, 6, 15))
endangered_species_list3 = EndangeredSpeciesList(id=3, species_id=3, status='Endangered', list_date=datetime(2023, 3, 20))
endangered_species_list4 = EndangeredSpeciesList(id=4, species_id=4, status='Vulnerable', list_date=datetime(2022, 7, 30))


session.add_all([habitat1, habitat2, habitat3, habitat4, animal1, animal2, animal3, animal4, conservation_project1, conservation_project2, conservation_project3, conservation_project4, research_study1, research_study2, research_study3, research_study4, researcher1, researcher2, researcher3, researcher4, researcher_study_link1, researcher_study_link2, researcher_study_link3, researcher_study_link4, illegal_activity1, illegal_activity2, illegal_activity3, illegal_activity4, ranger1, ranger2, ranger3, ranger4, ranger_patrol1, ranger_patrol2, ranger_patrol3, ranger_patrol4, patrol_incident1, patrol_incident2, patrol_incident3, patrol_incident4, plant1, plant2, plant3, plant4, endangered_species_list1, endangered_species_list2, endangered_species_list3, endangered_species_list4])
session.commit()
