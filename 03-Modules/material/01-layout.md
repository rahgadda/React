# Box
- `Box` renders a `<div>` you can apply CSS styles to directly via React props.
- It as semantically similar to the JSX empty element that puts styling rules as needed.
- It doesn't offer any real functionality, just a placeholder for controlling the styles in the hierarchical markup structure.
- For example below jsx can be replaced using `<Box>`
  ```jsx
  import { makeStyles } from '@material-ui/styles'

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(1),
    }
  }))

  export default const Example = ({children, ...props}) => {
    const classes = useStyles(props);

    return (
      <div className={classes.root}>
        {children}
      </div>
    )
  }
  ```

  ```jsx
  import Box from '@material-ui/core/Box'
  
  export default const Example = ({children}) => (
    <Box display="flex" flexDirection="column"   alignItems="stretch" padding={1}>
      {children}
    </Box>
  )
  ```