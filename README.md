How to launch
--------------

To launch the build and deployment of your widget locally:

- Open a terminal in Visual Studio Code
- Run: `yarn start --env.bundleFile [PATH + Filename of your bundle (widget)]`

Display the widget:
-------------------

Once it's launched, you can view your widget here : http://localhost:5555/

Configure port number of local url
----------------------------------

If you need to change the port number of the local url, you can change it in the file webpack.config.js:

```
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        port: 5555 -> To modify if you want to use another port number
    }
```

Customize data displayed by your widget:
----------------------------------------

If you want to change the content displayed by your widget, you can modify hooks in the file : `src/widget-to-test-helper.ts`

Modifications made in the file automatically trigger a compilation on the fly and are taken into account in the UI

Known issue(s):
---------------

If you rebuild the bundle (of your widget) while the tool is launched, it will display the following error:

```
    ERROR in [copy-webpack-plugin] unable to locate 'C:\xxx\main.bundle.js' at 'C:\yyy\dist\main.bundle.js'
    i ｢wdm｣: Failed to compile.
```

To fix that issue, you need to stop this tool :

    In Visual Studio code terminal, execute Ctrl+C (Answer Y to end the program)
    Relaunch the tool: yarn start --env.bundleFile [PATH + Filename of your bundle]