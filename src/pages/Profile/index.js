import Icon from '@/components/Icon'
import { getUser } from '@/store/actions/profile'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const Profile = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  const { name, photo, art_count, fans_count, follow_count, like_count } =
    useSelector((state) => state.profile.user)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <div className={styles.root}>
      <div className="profile">
        {/* 顶部个人信息区域 */}
        <div className="user-info">
          <div className="avatar">
            <img src={photo} alt="" />
          </div>
          <div className="user-name">{name}</div>
          <Link to="/profile/edit">
            Profile <Icon type="iconbtn_right" />
          </Link>
        </div>

        {/* 今日阅读区域 */}
        <div className="read-info">
          <Icon type="iconbtn_readingtime" />
          Today Reading <span>10</span> mins
        </div>

        {/* 统计信息区域 */}
        <div className="count-list">
          <div className="count-item">
            <p>{art_count}</p>
            <p>Posts</p>
          </div>
          <div className="count-item">
            <p>{follow_count}</p>
            <p>Following</p>
          </div>
          <div className="count-item">
            <p>{fans_count}</p>
            <p>Followers</p>
          </div>
          <div className="count-item">
            <p>{like_count}</p>
            <p>Likes</p>
          </div>
        </div>

        {/* 主功能菜单区域 */}
        <div className="user-links">
          <div className="link-item">
            <Icon type="iconbtn_mymessages" />
            <div>Notification</div>
          </div>
          <div className="link-item">
            <Icon type="iconbtn_mycollect" />
            <div>Collection</div>
          </div>
          <div className="link-item">
            <Icon type="iconbtn_history1" />
            <div>History</div>
          </div>
          <div className="link-item">
            <Icon type="iconbtn_myworks" />
            <div>My Posts</div>
          </div>
        </div>
      </div>

      {/* 更多服务菜单区域 */}
      <div className="more-service">
        <h3>More</h3>
        <div className="service-list">
          <div
            className="service-item"
            onClick={() => navigate('/profile/feedback')}
          >
            <Icon type="iconbtn_feedback" />
            <div>Feedback</div>
          </div>
          <div
            className="service-item"
            onClick={() => navigate('/profile/chat')}
          >
            <Icon type="iconbtn_xiaozhitongxue" />
            <div>Customer Service</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
