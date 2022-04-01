<script>
import {h} from 'vue'
const DataComponent = (props,context) => {
  return h(`h${props.level}`,context.attrs,context.slots)
}
DataComponent.props = ['level']
export default DataComponent;
</script>