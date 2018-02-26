<template>
  <div>
        <h1>Settings</h1>
        <h2>Block Times</h2>
        <table>
            <tr>
                <th>
                    <h3>Block 1</h3>
                </th>
            </tr>
            <tr>
                <td>Start Time</td>
                <td>
                    <input id="b1Start" type="time">
                </td>

                <td>End Time</td>
                <td>
                    <input id="b1End" type="time">
                </td>
            </tr>
            <tr>
                <th>
                    <h3>Block 2</h3>
                </th>
            </tr>
            <tr>
                <td>Start Time</td>
                <td>
                    <input id="b2Start" type="time">
                </td>

                <td>End Time</td>
                <td>
                    <input id="b2End" type="time">
                </td>
            </tr>
            <tr>
                <th>
                    <h3>Block 3</h3>
                </th>
            </tr>
            <tr>
                <td>Start Time</td>
                <td>
                    <input id="b3Start" type="time">
                </td>

                <td>End Time</td>
                <td>
                    <input id="b3End" type="time">
                </td>
            </tr>
        </table>
        <h2>Date Settings</h2>
        <h3>Year Start Date
            <input id="yearStart" type="date">
        </h3>

        <h2>Requirement Settings</h2>
        <h3>Weekly Required Hours
            <input id="reqHours" type="text">
        </h3>

        <button>Apply Changes</button>
        <button>Cancel Changes</button>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
