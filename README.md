# cypress-automation-lab-v1.3
### setup cypress ci with jenkins

![jenkins-demo](https://user-images.githubusercontent.com/69259809/133934367-08d0cad3-6607-4cb3-9dba-5533d7cfd500.gif)



* Go to https://www.jenkins.io/

* Download `java .war`

 <img src="https://user-images.githubusercontent.com/69259809/133933422-71848e65-a46a-40e2-94fd-dc7ce4bde1a9.png" width="270" height="270"/>

* Drag the downloaded file into the project IDE

* In the IDE terminal run `npm run jenkins`

* Go to http://localhost:8080

* Copy your generated admin password

* Install all recommended plugins

 <img src="https://user-images.githubusercontent.com/69259809/133933469-dfbf0802-2c8a-47b4-9667-52dde70a425c.png" width="270" height="270"/>
 
* create admin user
* 
 <img src="https://user-images.githubusercontent.com/69259809/133933480-6d9c7400-1455-4aa8-ada7-8759f7495260.png" width="270" height="270"/>

Approve Instance Configuration for Jenkins URL at `http://localhost:8080/`

In Jenkins admin dashboard Create new Item

* Give item name

 <img src="https://user-images.githubusercontent.com/69259809/133933496-1d24caf4-15b8-40f5-a855-eedeecea6437.png" width="270" height="270"/>

Select `Freestyle project` scroll down and click OK

In the build config General tab
	• give project description
	• select `use custom workspace`
	• in IDE terminal run command `pwd` and copy the folder address
	• give display name
  
  * Enter content to create parameterized build

 <img src="https://user-images.githubusercontent.com/69259809/133933596-8f95faf1-cbdb-4c38-a2a9-82688c010012.png" width="270" height="270"/>

In the choices

<code>
cy:run:chrome
cy:run:firefox
cy:run:electron
cy:run-dashboar
</code>

In the description

<code>
Select the testing method:
1. chrome
2. firefox
3. electron
4. cypress dashboard
  <code>
    
In the build section select option `Execute shell` and enter `npm run "$script"`
    
Hit save and enjoy run the build🚀
    

    


