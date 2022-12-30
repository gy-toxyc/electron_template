<h1 align="center"><b>Set up your Electron Project</b></h1>

<h3 align="center">
<i>In this first tutorial, you'll set up your project. After doing everything explained in this document, you'll be able to start working on your project.</i>
</h3><br>

***

<h2 align="left">
<i>Install <b>Electron and NodeJS</b></i>
</h2>

<h5>
Execute the Bacth file <b><i>setup.bat</b></i> to install Electron and NodeJS modules. After those installations, the batch will put your project inside Electron Forge to make it available to test and to, in the future, pack it up into a distributable desktop application.
<br>
The Batch file for this installation will delete itself when the process has finished.
</h5>
<br>

***

<h2 align="left">
<i>Install <b>BabelJS<span style="color: #EB6868; font-size: 12px; margin-left: 10px;">optional</span></b></i>
</h2>

<h5>
Execute the Bacth file <b><i>babel_setup.bat</b></i> if you want to install BabelJS modules. This is highly recommended to work with ES6 module system ("import" and "export" statements), as Electron doesn't support ES6 and you are not able to access the NodeJS modules from the renderer processes.
<br>
The Batch file for this installation will delete itself when the process has finished.
</h5>
<br>

***

<h2 align="left">
<i>Install <b>TypeScript<span style="color: #EB6868; font-size: 12px; margin-left: 10px;">optional</span></b></i>
</h2>

<h5>
Execute the Bacth file <b><i>typescript_setup.bat</b></i> if you want to install the TypeScript compiler. The installation process is prepared to work properly with the <b><i>tsconfig.json</b></i> that is provided with this template. The, you'll be free to modify the directories and properties of the <b><i>tsconfig.json</b></i> file.
<br>
The Batch file for this installation will delete itself when the process has finished.
</h5>
<br>

***

<br>
<h5>
Having done everything explained above, you'll be able to work on your project.<br>
If you want to pack your project into a distributable desktop application, go to <b><i>PACKING.md</b></i> in this directory.
</h5>