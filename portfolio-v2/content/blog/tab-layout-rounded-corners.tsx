import { P, H2, Code, Img } from '@/components/blog/primitives'

export const meta = {
  title: 'How To Create Tab Layout With Rounded Corners In Android',
  description: 'A step-by-step guide to implementing a styled TabLayout with rounded corners using CardView and ViewPager.',
  date: '2020-07-07',
  readingTime: '2 min read',
  tags: ['Android', 'Kotlin', 'XML', 'UI'],
}

export default function Post() {
  return (
    <>
      <P>
        The Tab Layout is used to display tabs in a horizontal layout and it can be implemented
        with or without a ViewPager. In this article, I will show you how to create a tab layout
        with rounded corners using a CardView wrapper and ViewPager for swipe navigation.
      </P>

      <Img
        src="/img/blog/tab-layout-result.png"
        alt="Android TabLayout with rounded corners result"
        caption="The final result — a TabLayout with rounded corners using CardView"
      />

      <P>
        The trick is simple: wrap your TabLayout inside a CardView and set the <code>cardCornerRadius</code> attribute.
        This gives you beautifully rounded tabs without any custom drawable hacks.
      </P>

      <H2>1. Adding the design support library</H2>

      <P>First, add the Material Design library dependency to your app-level build.gradle file:</P>

      <Code language="gradle">{`
implementation 'com.google.android.material:material:1.1.0'
      `}</Code>

      <H2>2. Working on the Activity Layout</H2>

      <P>
        Wrap your TabLayout inside a CardView. The CardView gives us the rounded corners
        via <code>app:cardCornerRadius</code>. Set the background color of the TabLayout
        to match your design.
      </P>

      <Code language="xml">{`
<com.google.android.material.card.MaterialCardView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_margin="16dp"
    app:cardCornerRadius="20dp"
    app:cardElevation="0dp">

    <com.google.android.material.tabs.TabLayout
        android:id="@+id/tabLayout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="@color/colorPrimary"
        app:tabIndicatorColor="@color/white"
        app:tabSelectedTextColor="@color/white"
        app:tabTextColor="@color/white_transparent" />

</com.google.android.material.card.MaterialCardView>
      `}</Code>

      <H2>3. Adding the ViewPager</H2>

      <P>Below the CardView, add a ViewPager to handle the swipe navigation between tab contents:</P>

      <Code language="xml">{`
<androidx.viewpager.widget.ViewPager
    android:id="@+id/viewPager"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_below="@id/cardView" />
      `}</Code>

      <H2>4. Working on the Fragments</H2>

      <P>
        Create a Fragment for each tab. Each fragment represents the content displayed
        when a tab is selected. For this example, we will create simple fragments with
        a text label.
      </P>

      <Code language="kotlin">{`
class FirstFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_first, container, false)
    }
}
      `}</Code>

      <H2>5. Adding the ViewPager Adapter</H2>

      <P>
        Create an adapter that extends FragmentPagerAdapter to connect your fragments
        to the ViewPager:
      </P>

      <Code language="kotlin">{`
class ViewPagerAdapter(fm: FragmentManager) : FragmentPagerAdapter(fm) {

    private val fragments = mutableListOf<Fragment>()
    private val titles = mutableListOf<String>()

    fun addFragment(fragment: Fragment, title: String) {
        fragments.add(fragment)
        titles.add(title)
    }

    override fun getItem(position: Int): Fragment = fragments[position]

    override fun getCount(): Int = fragments.size

    override fun getPageTitle(position: Int): CharSequence = titles[position]
}
      `}</Code>

      <H2>6. Connecting it all together</H2>

      <P>Finally, wire everything up in your Activity:</P>

      <Code language="kotlin">{`
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val adapter = ViewPagerAdapter(supportFragmentManager)
        adapter.addFragment(FirstFragment(), "Tab 1")
        adapter.addFragment(SecondFragment(), "Tab 2")
        adapter.addFragment(ThirdFragment(), "Tab 3")

        viewPager.adapter = adapter
        tabLayout.setupWithViewPager(viewPager)
    }
}
      `}</Code>

      <P>
        And that is it. You now have a TabLayout with rounded corners that supports swipe
        navigation between fragments. The CardView wrapper handles all the corner radius
        styling without needing custom drawables.
      </P>

      <P>
        You can find the full source code on <a href="https://github.com/timmyCoder/Rounded_tabLayout" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline underline-offset-4 hover:text-gray-600 transition-colors">GitHub</a>.
      </P>
    </>
  )
}
