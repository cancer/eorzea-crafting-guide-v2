import { component$, Resource, useStylesScoped$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
import { Loading } from "~/components/loading/loading";
import styles from "./home.css?inline";

type Props = {
  keyword: string;
  craftList: any;
  jobs: { id: number; name: string; abbr: string; icon: string }[];
  onSearch$: PropFunction<(keyword: string) => void>;
};

export const Home = component$<Props>(
  ({ keyword, craftList, jobs, onSearch$ }) => {
    useStylesScoped$(styles);

    return (
      <div class="Container">
        <div class="ToolBar">
          <div class="ToolBar_Main">
            <h3 class="ToolBar_Heading">🔍 キーワード検索</h3>
            <form
              preventdefault:submit
              onSubmit$={(_, currentTarget) =>
                onSearch$(currentTarget.keyword.value)
              }
            >
              <input
                name="keyword"
                class="ToolBar_Search"
                type="text"
                value={keyword}
              />
            </form>
          </div>
        </div>
        <div class="CraftList">
          <Resource
            value={craftList}
            onResolved={(list) => <>{JSON.stringify(list)}</>}
            onPending={() => (
              <div class="Loading">
                <Loading />
              </div>
            )}
          />
        </div>
        {/*
      <div class="CraftList">
        <div v-if="searching" class="Loading">
          <loading class="Loading_Main"></loading>
        </div>
        <table v-if="!searching" class="CraftList_Table">
          <tr v-for="item in craftList.items" :key="item.id" class="CraftList_TableRow">
          <td class="CraftList_TableCell">
            <a @click.prevent="navigateToDetail(item.id)" href="">
            {{item.name}}
          </a>
          <!--router-link :to=""></router-link-->
        </td>
        <td class="CraftList_TableCell">
          <a @click.prevent="navigateToDetail(item.id)" href="">
          {{item.job.name}}
        </a>
      </td>
      <td class="CraftList_TableCell">
        <a @click.prevent="navigateToDetail(item.id)" href="">
        Lv {{item.job.level}}
      </a>
    </td>
</tr>
</table>
</div>
*/}
        <div class="Selection">
          <div class="ClassSelection">
            <h3 class="ClassSelection_Heading">🛠 クラス別検索</h3>
            <ul class="ClassSelection_List">
              {jobs.map(({ id, icon, name }) => (
                <li key={id} class={`ClassSelection_ListItem`}>
                  <a href=""></a>
                  <img src={icon} alt={name} />
                </li>
              ))}
              {/*
        <li
          v-for="job in jobs"
        :key="job.id"
        :class="{ 'ClassSelection_ListItem--active': job.id === search.job }"
        class="ClassSelection_ListItem"
        >
        <a @click.prevent="searchJob(job.id)" href="">
        <img :src="job.icon" :alt="getJobNameById(job.id)">
      </a>
    </li>
    */}
            </ul>
          </div>
          {/*
  <div class="LevelSelection">
    <h3 class="LevelSelection_Heading">📖 手帳別検索</h3>
    <ul class="LevelSelection_List">
      <li
        v-for="(level, index) in levels"
      :key="index"
      class="LevelSelection_ListItem"
      :class="{ 'LevelSelection_ListItem--active': index === currentLevelIndex }"
      >
      <a @click.prevent="searchLevel(level)" href="">{{level}}</a>
  </li>
</ul>
</div>
*/}
        </div>
      </div>
    );
  }
);
