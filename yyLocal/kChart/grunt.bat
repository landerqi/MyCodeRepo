@echo off
 set /p t=grunt task name:
 set /p p=server port:
 call "e:\feteam\grunt.cmd" server:%t% --base="e:\feteam\node_modules\grunt" --nodepath="e:\feteam\node_modules" --port=%p%
 pause