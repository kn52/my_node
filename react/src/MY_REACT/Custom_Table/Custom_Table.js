
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import './Custom_Table.scss';
import { Convert } from 'easy-currencies';

export default function Custom_Table () {
    const [INR_VALUE,SetINR_VALUE] = useState("");

    useEffect(async ()=>{
        const options = {
            from: "USD",
            to: "INR",
            amount: 1
          }

          const converted_value = await Convert(options.amount).from(options.from).to(options.to);
          SetINR_VALUE(converted_value)
    },[])
    return (
        <div>
        <Table className='table_custom'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>H1</Table.HeaderCell>
              <Table.HeaderCell>H2</Table.HeaderCell>
              <Table.HeaderCell>H3</Table.HeaderCell>
              <Table.HeaderCell>H4</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>4</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>6</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>8</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>9</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>11</Table.Cell>
              <Table.Cell>12</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>13</Table.Cell>
              <Table.Cell>14</Table.Cell>
              <Table.Cell>15</Table.Cell>
              <Table.Cell>16</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>18</Table.Cell>
              <Table.Cell>19</Table.Cell>
              <Table.Cell>20</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Cell collapsing="4">Job Done</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell collapsing="4">1 Dollar is equal to {INR_VALUE} INR</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
}